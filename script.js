document.getElementById('encryptBtn').addEventListener('click', () => {
    const key = document.getElementById('key').value;
    const inputText = document.getElementById('inputText').value;
    if (!key) {
        alert('Please enter an encryption key.');
        return;
    }
    if (!inputText) {
        alert('Please enter text to encrypt.');
        return;
    }
    try {
        const encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
        document.getElementById('outputText').value = encrypted;
    } catch (e) {
        alert('Encryption failed: ' + e.message);
    }
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const key = document.getElementById('key').value;
    const inputText = document.getElementById('inputText').value;
    if (!key) {
        alert('Please enter a decryption key.');
        return;
    }
    if (!inputText) {
        alert('Please enter text to decrypt.');
        return;
    }
    try {
        const decrypted = CryptoJS.AES.decrypt(inputText, key);
        const originalText = decrypted.toString(CryptoJS.enc.Utf8);
        if (!originalText) {
            alert('Decryption failed. Check your key and input.');
            return;
        }
        document.getElementById('outputText').value = originalText;
    } catch (e) {
        alert('Decryption failed: ' + e.message);
    }
});

const modeSwitch = document.getElementById('modeSwitch');
const modeLabel = document.getElementById('modeLabel');
const toggleKeyBtn = document.getElementById('toggleKeyBtn');
const keyInput = document.getElementById('key');

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        document.body.classList.add('dark-mode');
        modeLabel.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        modeLabel.textContent = 'Light Mode';
    }
});

toggleKeyBtn.addEventListener('click', () => {
    if (keyInput.type === 'password') {
        keyInput.type = 'text';
        toggleKeyBtn.textContent = 'Hide';
    } else {
        keyInput.type = 'password';
        toggleKeyBtn.textContent = 'Show';
    }
});
