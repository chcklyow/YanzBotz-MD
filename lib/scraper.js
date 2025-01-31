const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const error = {
    link: {
        status: false,
        message: "Link tidak valid!"
    },
};

exports.mediafire = async(url) => {
    try{
        const {data} = await axios.get(url)
        const $ = cheerio.load(data)
        const result = {
            filename: $("div.dl-btn-label").attr("title"),
            filesize: $("a#downloadButton").text().split("(")[1].split(")")[0],
            uploadAt: $("ul.details > li:nth-child(2)").text().split(": ")[1],
            mimetype: mime.lookup($("a#downloadButton").attr("href")),
            ext: $("a#downloadButton").attr("href").replace(/^.*[\.\/\\]/, ""),
            filetype: $("div.filetype").text(),
            link: $("a#downloadButton").attr("href")
        }
        return({status: true, ...result})
    }catch{
        return({status: false, message: 'error'})
    }
}
exports.tiktok = async (url) => {
    if (!/tiktok/.test(url)) return error.link;
    const get_token = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(get_token.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = { url: url, _token: token, };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    get_data = cheerio.load(data.html);
    if (data.status) {
        return {
            status: 200,
            thumbnail: get_data("img").attr("src"),
            video: get_data("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: get_data("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else
        return {
            status: false,
        };
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log("Update 'scraper.js'");
    delete require.cache[file];
});