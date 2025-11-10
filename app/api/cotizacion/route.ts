import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import nodemailer from "nodemailer"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Insertar en Supabase
    const { data: cotizacion, error } = await supabase
      .from("cotizaciones")
      .insert([
        {
          nombre_cliente: data.nombre_cliente || "Sin especificar",
          empresa: data.empresa || null,
          email: data.email,
          telefono: data.telefono,
          origen: data.origen || "No especificado",
          destino: data.destino || "No especificado",
          tipo_mercancia: data.tipo_mercancia || "General",
          peso_kg: data.peso_kg ? parseFloat(data.peso_kg) : null,
          fecha_estimada: data.fecha_estimada || null,
          tipo_carga: data.tipo_carga || "General",
          observaciones: data.observaciones || null,
          estado: "Pendiente",
          prioridad: "Media"
        }
      ])
      .select()
      .single()

    if (error) {
      console.error("Error al insertar cotización:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Configurar nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // HTML del email de confirmación
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { 
      margin: 0; 
      padding: 0; 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f5;
    }
    .container { 
      max-width: 600px; 
      margin: 20px auto; 
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header { 
      background-color: #ffffff; 
      padding: 30px 20px 20px 20px; 
      text-align: center;
      border-bottom: 3px solid #dc2626;
    }
    .logo-container { 
      display: flex;
      align-items: center; 
      justify-content: center;
      margin-bottom: 15px;
    }
    .logo-img {
      width: 60px;
      height: auto;
      margin-right: 15px;
    }
    .logo-text {
      text-align: left;
      line-height: 1.2;
    }
    .logo-line1 { 
      font-size: 14px;
      font-weight: 600;
      color: #0a0a0a;
      letter-spacing: 1px;
    }
    .logo-line2 { 
      font-size: 20px;
      font-weight: 700;
      color: #dc2626;
      letter-spacing: 2px;
    }
    .greeting { 
      color: #0a0a0a;
      font-size: 24px;
      font-weight: 600;
      margin: 15px 0;
    }
    .content { 
      padding: 40px 20px 20px 20px;
    }
    .message { 
      color: #374151;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 25px;
    }
    .message.last {
      margin-bottom: 0;
    }
    .info-box { 
      background-color: #f3f4f6;
      border-left: 4px solid #dc2626;
      border-radius: 6px;
      padding: 20px;
      margin: 25px 0;
    }
    .info-title { 
      color: #0a0a0a;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .info-item { 
      color: #4b5563;
      font-size: 14px;
      line-height: 1.6;
    }
    .info-item.full-width {
      grid-column: 1 / -1;
    }
    .info-item strong {
      color: #1f2937;
      display: block;
      margin-bottom: 2px;
    }
    .footer { 
      background-color: #dc2626;
      padding: 25px 20px;
      text-align: center;
    }
    .footer-text { 
      color: white;
      font-size: 14px;
      margin: 8px 0;
      line-height: 1.5;
    }
    .footer-text strong {
      font-weight: 600;
    }
    .footer-links { 
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,0.3);
    }
    .footer-link { 
      color: white;
      text-decoration: none;
      margin: 0 8px;
      font-size: 12px;
      opacity: 0.9;
    }
    .footer-link:hover {
      opacity: 1;
      text-decoration: underline;
    }
    @media only screen and (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      .logo-line1 { font-size: 12px; }
      .logo-line2 { font-size: 18px; }
      .greeting { font-size: 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="https://monarcanld.com/logo/logo_monarca.png" alt="Logo Monarca" class="logo-img" style="display:block;">
        <div class="logo-text">
          <div class="logo-line1">TRANSPORTES INTERNACIONALES</div>
          <div class="logo-line2">MONARCA</div>
        </div>
      </div>
      <div class="greeting">Hola estimad@ ${data.nombre_cliente || "Cliente"}</div>
    </div>
    
    <div class="content">
      <div class="message">
        <strong>Hemos recibido con éxito su información.</strong> Uno de nuestros compañeros está atendiendo su solicitud, nos pondremos en contacto a la brevedad.
      </div>

      <div class="info-box">
        <div class="info-title">Resumen de su solicitud</div>
        <div class="info-grid">
          ${data.empresa ? `<div class="info-item full-width"><strong>Empresa</strong>${data.empresa}</div>` : ""}
          <div class="info-item">
            <strong>Email</strong>
            ${data.email}
          </div>
          <div class="info-item">
            <strong>Teléfono</strong>
            ${data.telefono}
          </div>
          ${data.origen ? `<div class="info-item"><strong>Origen</strong>${data.origen}</div>` : ""}
          ${data.destino ? `<div class="info-item"><strong>Destino</strong>${data.destino}</div>` : ""}
          ${data.tipo_mercancia ? `<div class="info-item"><strong>Mercancía</strong>${data.tipo_mercancia}</div>` : ""}
          ${data.peso_kg ? `<div class="info-item"><strong>Peso</strong>${data.peso_kg} kg</div>` : ""}
        </div>
      </div>

      <div class="message last">
        Gracias por confiar en nosotros. Salud y éxito.
      </div>
    </div>

    <div class="footer">
      <div class="footer-text"><strong>Visita nuestra página <a href="https://monarcanld.com" style="color: white; text-decoration: underline;">monarcanld.com</a></strong></div>
      <div class="footer-text" style="color: white;">📧 exportaciones@tmonarca.com.mx</div>
      <div class="footer-text" style="color: white;">📞 +52 867 225 4260</div>
      <div class="footer-links">
        <a href="https://monarcanld.com/#privacy-modal" class="footer-link" target="_blank" style="color: white;">Aviso de privacidad</a>
        <span style="color: white; opacity: 0.8;"> | </span>
        <a href="https://monarcanld.com/#privacy-modal" class="footer-link" target="_blank" style="color: white;">Ley ARCO</a>
      </div>
      <div class="footer-text" style="margin-top: 15px; font-size: 12px; opacity: 0.9; color: white;">
        Copyright © Transportes Internacionales Monarca, Todos los derechos reservados
      </div>
    </div>
  </div>
</body>
</html>
    `

    // Enviar email al cliente
    await transporter.sendMail({
      from: `"Transportes Internacionales Monarca" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Confirmación de Solicitud de Cotización - Transportes Monarca",
      html: emailHTML,
    })

    // Enviar notificación al equipo de ventas
    await transporter.sendMail({
      from: `"Sistema de Cotizaciones" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_FROM || "exportaciones@tmonarca.com.mx",
      subject: `Nueva Cotización #${cotizacion.id} - ${data.nombre_cliente || "Sin nombre"}`,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><strong>Folio:</strong> #${cotizacion.id}</p>
        <p><strong>Cliente:</strong> ${data.nombre_cliente || "Sin especificar"}</p>
        <p><strong>Empresa:</strong> ${data.empresa || "Sin especificar"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Origen:</strong> ${data.origen || "No especificado"}</p>
        <p><strong>Destino:</strong> ${data.destino || "No especificado"}</p>
        <p><strong>Tipo de Mercancía:</strong> ${data.tipo_mercancia || "No especificado"}</p>
        <p><strong>Peso:</strong> ${data.peso_kg ? data.peso_kg + " kg" : "No especificado"}</p>
        <p><strong>Tipo de Carga:</strong> ${data.tipo_carga}</p>
        <p><strong>Fecha Estimada:</strong> ${data.fecha_estimada || "No especificada"}</p>
        <p><strong>Observaciones:</strong> ${data.observaciones || "Ninguna"}</p>
        <br>
        <p>Accede al CRM para gestionar esta cotización: <a href="https://monarcatransportes.netlify.app">https://monarcatransportes.netlify.app</a></p>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      cotizacion,
      message: "Cotización enviada exitosamente" 
    })

  } catch (error) {
    console.error("Error en la API:", error)
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
