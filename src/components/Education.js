export default function Education (){
    return  <section id="education" className="bg-secondary text-white py-10 px-5 md:px-20">
      <h2 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>
        Education
      </h2>
      
      <div className="space-y-6">
        {/* Degree */}
        <div className="bg-primary p-5 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold">🎓 BE in Mechanical Engineering</h3>
          <p className="text-lg md:text-xl leading-relaxed mt-2">Prince Shri Venkateshwara Padmavathy Engineering College, Ponmar, Chennai.</p>
          <p className="text-lg md:text-xl leading-relaxed mt-2">2016 – 2020</p>
        </div>

        {/* Course */}
        <div className="bg-primary p-5 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold">📜 MERN Stack Development</h3>
          <p className="text-lg md:text-xl leading-relaxed mt-2">NXT WAVE (Online)</p>
          <p className="text-lg md:text-xl leading-relaxed mt-2">Completed: April 2025</p>
        </div>

        {/* HSC */}
        <div className="bg-primary p-5 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold">🏫 HSC </h3>
          <p className="text-lg md:text-xl leading-relaxed mt-2">De Britto Higher Secondary School, Devakottai, Sivagangai.</p>
          <p className="text-lg md:text-xl leading-relaxed mt-2">2015 – 2016</p>
        </div>

        {/* SSLC */}

         <div className="bg-primary p-5 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold">🏫 SSLC </h3>
          <p className="text-lg md:text-xl leading-relaxed mt-2">De Britto Higher Secondary School, Devakottai, Sivagangai.</p>
          <p className="text-lg md:text-xl leading-relaxed mt-2">2013 – 2014</p>
        </div>

    
      </div>
    </section>

}