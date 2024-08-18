function skillsMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Skills member");
            resolve();
        }, 2000);
    });
}