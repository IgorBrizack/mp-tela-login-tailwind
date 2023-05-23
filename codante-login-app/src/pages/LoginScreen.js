import Image from "next/image"
import localImage from '../../public/mountain.jpg'

export default function LoginScreen () {
  return (
    <div className="flex flex justify-center items-center m-auto w-[800px] p-[5px] border-2 rounded-lg border-white bg-slate-900">
      <div className="mr-10">
        <div>
          <h1 className="text-blue-600/75 font-dm-sans text-4xl font-bold">Faça seu Login<span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent bg-opacity-75">.</span></h1>
        </div>
        <form className="w-[300px]" >
          <div clasName='grid gap-6 mb-6 md:grid-cols-2'>
            <div>
                <label for="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" id="email" className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.com" required></input>
            </div>
            <div>
                <label for="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Senha</label>
                <input type="password" id="password" className="bg-black border border-black text-white text-sm rounded-lg focus:ring-black focus:bg-transparent block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Digite a senha" required></input>
            </div>
          </div>
        </form>
        <div>
          <span className="text-sm font-medium text-slate-700 underline">
            <a href="">Esqueci minha senha</a>
          </span>
        </div>     
        <button className="border  rounded-full w-[200px] h-[35px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="button"><span className="text-gray-50">Entrar</span></button>
        <div>
          <span className="text-sm font-medium text-slate-700 underline">
            <a href="">Ainda não tenho conta</a>
          </span>
        </div>
      </div>
      <div clasName='absolute'>
        <Image
         src={localImage}
         width={499}
         height={654}
         alt='mountain image'
         />
         <div class="relative inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black opacity-75"></div>
      </div>
    </div>
  )
}