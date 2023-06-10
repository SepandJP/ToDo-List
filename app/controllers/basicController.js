exports.date = () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    const day = d.getDate();
    const today = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = `${today}, ${month} ${day}`;
    return date;
};