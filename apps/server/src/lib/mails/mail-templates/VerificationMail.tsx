interface VerificationEmailProps {
  purpose: string;
  username: string;
  url: string;
}

export default function VerificationEmail({
  purpose,
  username,
  url,
}: VerificationEmailProps) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Verification Code</title>
        <link href="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2" rel="stylesheet">
        <style>
          body {
            font-family: 'Roboto', Verdana, sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        </style>
      </head>
      <body>
        <p>Here's your verification Link: <a href="${url}">Verification Link</a></p>
        <div>
          <div>
            <h2>Hello ${username},</h2>
          </div>
          <div>
            <p>${purpose}</p>
          </div>
          <div>
            <p>If you did not request this code, please ignore this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
