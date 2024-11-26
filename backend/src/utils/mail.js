import nodemailer from "nodemailer";
export const generateOTP = () => {
  let otp = "";
  for (let i = 0; i <6; i++) {
    const randval = Math.floor(Math.random() * 10);
    otp = otp + randval;
  }
  return otp;
};

export const mailTransport = () =>
  nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

// export const mailTransport = () =>
//   nodemailer.createTransport({
//     service: 'gmail', // Use your email service provider, like SendGrid, Gmail, etc.
//     auth: {
//       user: process.env.EMAIL_USERNAME, // Your email address
//       pass: process.env.EMAIL_PASSWORD, // Your email password (consider using app passwords)
//     },
//   });

export const generateEmailTemplate = (OTP) => {
 return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
  <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">Email Verification</h2>
      <p class="text-gray-600">Please use the following OTP to verify your email address.</p>
    </div>

    <div class="bg-blue-50 p-4 rounded-lg mb-6">
      <h3 class="text-xl font-semibold text-blue-600">Your OTP: <span class="text-2xl text-black font-bold">${OTP}</span></h3>
      <p class="text-sm text-gray-600">This OTP will expire in 1day. If you didn’t request this, please ignore this email.</p>
    </div>



    <footer class="text-center text-sm text-gray-600 mt-6">
      <p>Thank you for registering with us!</p>
      <p>Best regards,</p>
      <p>Immunebytes</p>
    </footer>
  </div>
</body>
</html>
`;
};


export const plainEmailTemplate = (heading,message) => {
    return `<!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Email Verification</title>
     <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body class="bg-gray-100">
     <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
       <div class="text-center mb-6">
         <h2 class="text-2xl font-semibold text-gray-800">Email verified</h2>
       </div>
   
       <div class="bg-blue-50 p-4 rounded-lg mb-6">
         <h3 class="text-xl font-semibold text-blue-600">${heading}</h3>
         <p class="text-sm text-gray-600">${message}.</p>
       </div>
   
   
   
       <footer class="text-center text-sm text-gray-600 mt-6">
         <p>Thank you for registering with us!</p>
         <p>Best regards,</p>
         <p>Immunebytes</p>
       </footer>
     </div>
   </body>
   </html>
   `;
   };


   export const forgotPasswordTemplate=()=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 py-10">

  <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4">Password Reset Request</h1>
    <p class="text-gray-600 mb-6">Hi <strong>[User’s Name]</strong>,</p>
    <p class="text-gray-600 mb-6">We received a request to reset the password for your account. If you didn’t request this, please ignore this email.</p>
    <p class="text-gray-600 mb-6">To reset your password, click the button below:</p>
    <a href="[Password Reset Link]" class="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors mb-6">Reset Your Password</a>
    <p class="text-gray-600 mb-6">The link will expire in <strong>[X] hours</strong> for security reasons. If the link expires, you can request a new password reset.</p>
    <p class="text-gray-600">If you continue to have trouble, feel free to reach out to our support team.</p>
    <div class="mt-6 text-center">
      <p class="text-gray-500 text-sm">Best regards,</p>
      <p class="text-gray-500 text-sm">[Your Company Name]</p>
      <p class="text-gray-500 text-sm">[Company Website]</p>
    </div>
  </div>

</body>
</html>
`
   }

   export const resetPasswordTemplate = ()=>{
    return  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 py-10">

  <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4">Reset Your Password</h1>
    <p class="text-gray-600 mb-6">Hi <strong>[User’s Name]</strong>,</p>
    <p class="text-gray-600 mb-6">We received a request to reset your password. To proceed, click the button below:</p>

    <!-- Reset Password Button -->
    <a href="[Password Reset Link]" class="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors mb-6">
      Reset Password
    </a>

    <p class="text-gray-600 mb-6">The link will expire in <strong>[X] hours</strong> for security reasons. If the link expires, you can request a new password reset.</p>
    <p class="text-gray-600">If you didn't request this, please ignore this email.</p>

    <div class="mt-6 text-center">
      <p class="text-gray-500 text-sm">Best regards,</p>
      <p class="text-gray-500 text-sm">[Your Company Name]</p>
      <p class="text-gray-500 text-sm">[Company Website]</p>
    </div>
  </div>

</body> 
</html>
`
   }
