//import { chaosAudit } from './jeff/jeff-utils.js';
import { getUser, setUser } from './local-storage-utils.js';

let user = getUser();
const userNameElement = document.getElementById('visitor-sign-in');

const securityScan = document.getElementById('security-scanner');

let i = 0;
let text = 'Please enter your name and then scan your thumbprint for security clearance:';
const speed = 50;

export function securityInstructions() {
    if (i < text.length) {
        document.getElementById('visitor-instructions').innerHTML += text.charAt(i);
        i++;
        setTimeout(securityInstructions, speed);
    }
}

securityInstructions();

const avatarMap = {
    grant: 'assets/avatars/square-av_alan-grant.png',
    sattler: 'assets/avatars/square-av_ellie-sattler.png',
    malcolm: 'assets/avatars/square-av_ian-malcolm.png',
};

export function grabAvatarImage() {
    const avatarChoice = document.querySelector('input:checked');
    const hasSelected = avatarChoice !== null;

    return hasSelected ? avatarMap[avatarChoice.value] : 'assets/deadDinoHead.png';
}

securityScan.addEventListener('click', () => {
    if (userNameElement.value.length === 0) {
        userNameElement.value = 'Anonymous';
    }
    const newAvatar = grabAvatarImage();

    if (!user) {
        const newUser = {
            userName: userNameElement.value,
            userAvatar: newAvatar,
            dinoArray: [
                {
                    dinoId: 0,
                    species: '',
                    tRexPercent: '',
                    triceratopsPercent: '',
                    pterodactylPercent: '',
                    name: '',
                    description: '',
                    img: '',
                    top: '',
                    left: '',
                }
            ]
        };
        setUser(newUser);
    }

    if (user) {
        user.userName = userNameElement.value;
        setUser(user);
    }

    user = getUser(user);
    window.location = './lab/index.html';
});
