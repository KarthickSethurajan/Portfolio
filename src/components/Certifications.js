export default function Certifications(){
    const certificates = [
  {
    title: "Build Your Own Static Website - HTML, CSS, Bootstrap",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/static-website?id=QETJGRSMHR",
  },
  {
    title: "Build Your Own Responsive Website - Bootstrap, Flexbox",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=KAYTVRDBMV",
  },
  {
    title: "Build your Own Dynamic Web Application - JavaScript",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=VLQGLTRQYU",
  },
  {
    title: "Python",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=CXGVUASCPT",
  },
  {
    title: "SQL",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=OGHQSLYQCC",
  },
  {
    title: "React JS",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/react-js?id=OBIUBIOSZD",
  },
  {
    title: "Node JS",
    issuer: "NxtWave",
    link: "https://certificates.ccbp.in/intensive/node-js?id=SMNYRFGIXO",
  },

];


    return <section>

    <div className="bg-primary py-10 px-5 md:px-20 ">
      <h2 className="text-4xl text-white border-b-4 mb-5 w-[190px] font-bold">Certificates</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-2xl shadow-md p-5 transition hover:shadow-xl hover:scale-105 bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-blue-700">{cert.title}</h3>
            <p className="text-lg text-gray-600 mt-2">Issued by: {cert.issuer}</p>
            <p className="text-lg text-blue-500 mt-1 underline">View Certificate</p>
          </a> 
        ))}
      </div>
    </div>

    </section>
}