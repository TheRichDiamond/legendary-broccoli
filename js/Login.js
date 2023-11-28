let randomPassword = '';

    function generateRandomPassword() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      randomPassword = result;
      document.getElementById('password').value = randomPassword;
    }

    function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username && password === randomPassword) {
        window.location.href = '../question1.html';
      } else {
        document.getElementById('error-message').style.display = 'block';
      }
    }