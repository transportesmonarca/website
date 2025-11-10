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
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #ffffff; padding: 40px 20px; text-align: center; border-bottom: 1px solid #e5e7eb; }
    .logo-container { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 20px; }
    .logo-text { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .logo-line1 { font-size: 18px; font-weight: 300; color: #1e3a8a; letter-spacing: 2px; }
    .logo-line2 { font-size: 18px; font-weight: 300; color: #1e3a8a; letter-spacing: 2px; }
    .logo-line3 { font-size: 22px; font-weight: 700; color: #dc2626; letter-spacing: 3px; }
    .greeting { color: #1e3a8a; font-size: 28px; font-weight: 600; margin: 20px 0 10px; }
    .content { padding: 40px 20px; }
    .message { color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 30px; }
    .info-box { background-color: #f3f4f6; border-radius: 8px; padding: 20px; margin: 20px 0; }
    .info-title { color: #1e40af; font-weight: bold; margin-bottom: 10px; }
    .info-item { color: #4b5563; margin: 8px 0; }
    .footer { background-color: #dc2626; padding: 30px 20px; text-align: center; }
    .footer-text { color: white; font-size: 14px; margin: 5px 0; }
    .footer-links { margin-top: 15px; }
    .footer-link { color: white; text-decoration: none; margin: 0 10px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#1e3a8a"/>
          <path d="M30 35 L50 25 L70 35 L70 65 L50 75 L30 65 Z" fill="#dc2626"/>
          <circle cx="50" cy="50" r="15" fill="white"/>
          <text x="50" y="58" font-size="20" font-weight="bold" fill="#1e3a8a" text-anchor="middle">M</text>
        </svg>
        <div class="logo-text">
          <div class="logo-line1">TRANSPORTES</div>
          <div class="logo-line2">INTERNACIONALES</div>
          <div class="logo-line3">MONARCA</div>
        </div>
      </div>
      <div class="greeting">Hola estimad@ ${data.nombre_cliente || "Cliente"}</div>
    </div>
    
    <div class="content">
      <div class="message">
        <strong>Hemos recibido con éxito su información.</strong> Uno de nuestros compañeros está atendiendo su solicitud, nos pondremos en contacto a la brevedad.
      </div>

      <div class="info-box">
        <div class="info-title">Resumen de su solicitud:</div>
        <div class="info-item"><strong>Folio:</strong> #${cotizacion.id}</div>
        ${data.empresa ? `<div class="info-item"><strong>Empresa:</strong> ${data.empresa}</div>` : ""}
        <div class="info-item"><strong>Email:</strong> ${data.email}</div>
        <div class="info-item"><strong>Teléfono:</strong> ${data.telefono}</div>
        ${data.origen ? `<div class="info-item"><strong>Origen:</strong> ${data.origen}</div>` : ""}
        ${data.destino ? `<div class="info-item"><strong>Destino:</strong> ${data.destino}</div>` : ""}
        ${data.tipo_mercancia ? `<div class="info-item"><strong>Mercancía:</strong> ${data.tipo_mercancia}</div>` : ""}
        ${data.peso_kg ? `<div class="info-item"><strong>Peso:</strong> ${data.peso_kg} kg</div>` : ""}
      </div>

      <div class="message">
        Gracias por confiar en nosotros. Salud y éxito.
      </div>
    </div>

    <div class="footer">
      <div class="footer-text"><strong>Visita tmonarca.com.mx</strong></div>
      <div class="footer-text">📧 exportaciones@tmonarca.com.mx</div>
      <div class="footer-text">📞 +52 867 225 4260</div>
      <div class="footer-text">⏰ 8:00 – 16:00 (GMT-5) | Lunes – Sábado</div>
      <div class="footer-links">
        <a href="#" class="footer-link">Políticas de seguridad</a>
        <a href="#" class="footer-link">Aviso de privacidad</a>
        <a href="#" class="footer-link">Derechos ARCO</a>
      </div>
      <div class="footer-text" style="margin-top: 15px; font-size: 12px;">
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
