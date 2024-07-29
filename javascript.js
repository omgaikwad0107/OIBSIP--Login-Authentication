function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const msg = document.getElementById('register-msg');

    if (!username || !password) {
        msg.textContent = 'Please enter both username and password.';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        msg.textContent = 'Username already exists.';
        return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    msg.textContent = 'Registration successful. You can now log in.';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const msg = document.getElementById('login-msg');

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] === password) {
        msg.textContent = '';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
        localStorage.setItem('loggedIn', 'true');
    } else {
        msg.textContent = 'Invalid username or password.';
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    showLogin();
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('secured-page').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('secured-page').style.display = 'none';
}

window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
    } else {
        showLogin();
    }
};
