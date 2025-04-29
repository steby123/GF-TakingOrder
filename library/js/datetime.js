const updateDateTime = () =>{
    const now = new Date();
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }
    const date = now.toLocaleDateString('id-ID', options);
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('datetime').textContent = `${date} || ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();