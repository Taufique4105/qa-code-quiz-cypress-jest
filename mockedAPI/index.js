if (require.main === module) {
    http.createServer(app).listen(9999, () => {
    console.log("Application listening on PORT 9999");
});
}
