let user_mail = prompt('Enter your email');
let user_pass;
const mail_min_length = 5;
const pass_min_length = 6;
if (user_mail === null || user_mail === '') {
    alert('Canceled');
} else {
    if (user_mail === 'user@gmail.com') {
        user_pass = prompt('Enter your password');
        if (user_pass === null || user_pass === '') {
            alert('Canceled');
        } else {
            switch (user_pass) {
                case 'UserPass':
                    if (window.confirm('Do you want to change your password?')) {
                        let old_pass = prompt('Enter your old password');
                        if (old_pass === user_pass) {
                            let new_pass = prompt('Enter your new password');
                            if (new_pass.length < pass_min_length) {
                                alert('It’s too short password. Sorry.')
                            } else {
                                let new_pass_validation = prompt('Repeat your new password');
                                if (new_pass === new_pass_validation) {
                                    user_pass = new_pass;
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.')
                                }
                            }
                        } else if (old_pass === '' || old_pass === null) {
                            alert('Canceled')
                        } else {
                            alert('Wrong password')
                        }
                    } else {
                        alert('You have failed the change.')
                    }
                    break;
                default:
                    alert('Wrong password')
                    break;
            }
        }
    } else if (user_mail === 'admin@gmail.com') {
        user_pass = prompt('Enter your password');
        if (user_pass === null || user_pass === '') {
            alert('Canceled');
        } else {
            switch (user_pass) {
                case 'AdminPass':
                    if (window.confirm('Do you want to change your password?')) {
                        let old_pass = prompt('Enter your old password');
                        if (old_pass === user_pass) {
                            let new_pass = prompt('Enter your new password');
                            if (new_pass.length < pass_min_length) {
                                alert('It’s too short password. Sorry.')
                            } else {
                                let new_pass_validation = prompt('Repeat your new password');
                                if (new_pass === new_pass_validation) {
                                    user_pass = new_pass;
                                    alert('You have successfully changed your password.')
                                } else {
                                    alert('You wrote the wrong password.')
                                }
                            }
                        } else if (old_pass === '' || old_pass === null) {
                            alert('Canceled')
                        } else {
                            alert('Wrong password')
                        }
                    } else {
                        alert('You have failed the change.')
                    }
                    break;
                default:
                    alert('Wrong password')
                    break;
            }
        }
    } else if (user_mail.length < mail_min_length) {
        alert("I don't know any emails having name length less than 5 symbols")
    } else {
        alert('I don’t know you')
    }
}