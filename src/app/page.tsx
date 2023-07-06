'use client'

import React, { useState } from "react"
import { MostrarResumo } from "@/components/textoResumo"

export default function Home() {

  let [textoBase, setTextoBase] = React.useState('')

  return (
    <main className="min-h-screen items-center justify-center">

      <h1 className="py-12 text-center text-6xl font-bold">Resuma seus textos</h1>
      

    <div className="grid grid-cols-2 h-[512px] mx-16 rounded-xl bg-[#8661C1] border-2 border-[#BE97C6]">

        {/* Esquerda */}
        <div className="flex flex-col p-12 items-start relative">

          <h2 className="text-left leading-relaxed font-semibold">Insira o texto a ser resumido</h2>

          <form className="w-full h-full">
            <textarea className="w-full h-[80%] bg-[#8661C1] py-2 text-[#EFBCD5]"
             name="textoBase" id="textoBase" placeholder="Escreva seu texto aqui..."></textarea>
             
             <button className="left-0 bottom-0 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#4B5267] rounded-lg mt-8"
              type="submit">
               Resumir
            </button>
          </form>

      </div>

      {/* Direita */}
      <div className="p-12 text-left leading-relaxed">
        <h2 className="font-semibold">Texto resumido</h2>
        <MostrarResumo/>
      </div>

    </div>

    </main>
  )
}
