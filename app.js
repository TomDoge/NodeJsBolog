const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const resData = {
        name: 'Tom100',
        site: 'Google',
        env: process.env.NODE_ENV
    }
    res.end(JSON.stringify(resData))
}

module.exports = serverHandle