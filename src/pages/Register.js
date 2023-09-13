

function Register() {

    return (
      <div>
         <div className="px-[0] bg-[#3A4D1Cff] pb-16 flex justify-around w-screen absolute left-0 right-0 top-0"></div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,128L26.7,149.3C53.3,171,107,213,160,213.3C213.3,213,267,171,320,138.7C373.3,107,427,85,480,96C533.3,107,587,149,640,181.3C693.3,213,747,235,800,213.3C853.3,192,907,128,960,128C1013.3,128,1067,192,1120,197.3C1173.3,203,1227,149,1280,160C1333.3,171,1387,245,1413,282.7L1440,320L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>

         <div className="flex items-center justify-center">
            <div className="bg-[#3A4D1Cff] w-full max-w-sm p-4 rounded-lg sm:p-6 md:p-8 ">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Regjistrohu ne platformen tone</h5>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emri Mbiemri</label>
                        <input type="text" name="text" id="text" placeholder="Yllka Selimi"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-600" required></input>
                    </div>    
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" placeholder="yllka@gmail.com"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-600" required></input>
                    </div>                                             
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fjalekalimi</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-600" required></input>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-gray-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-blue-800">Regjistrohu</button>

                </form>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,32L40,37.3C80,43,160,53,240,64C320,75,400,85,480,74.7C560,64,640,32,720,64C800,96,880,192,960,218.7C1040,245,1120,203,1200,165.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

      </div>
    )
  }
  
  export default Register