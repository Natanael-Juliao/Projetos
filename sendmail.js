Email
    .send({
      Host: 'smtp.elasticemail.com',
      Username: 'natanael.juliao@hotmail.com',
      Password: '',
      To: 'them@website.com',
      From: 'you@isp.com',
      Subject: 'This is the subject',
      Body: 'And this is the body'
    })
    .then(message => alert(message));