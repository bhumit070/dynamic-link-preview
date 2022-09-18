import puppeteer from "puppeteer"
export default async function handler(req, res) {
  try {
    const { name = 'Immortal', year = new Date() } = req.query
    const host = process.env.HOST
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${host}/index.html?name=${name}&year=${year}`);
    const random_image_name = `${Date.now()}-${Math.random()}-${name}-puppeteer.png`
    await page.screenshot({ path: `./public/${random_image_name}` });
    await browser.close();
    return res.status(200).json({
      'og:title': name,
      'og:image': `${host}/${random_image_name}`,
      'og:description': 'is this cool ?',
      host
    })
  } catch (error) {
    console.log('error in generating image', error)
    return res.status(500).json({
      msg: 'failed to  generate an image'
    })
  }
}
