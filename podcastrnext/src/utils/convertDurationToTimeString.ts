export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600); // arredonda para baixo
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds] 
        .map(unit => String(unit).padStart(2, '0')) // completa os espaços vazios com 0
        .join(':') // une com os :

    return timeString;

}