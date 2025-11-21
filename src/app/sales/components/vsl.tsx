'use client';

import Script from "next/script";

export function VSL() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Descubra o Segredo para um Cão Calmo</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Assista ao vídeo abaixo para entender como nosso método inovador pode transformar o comportamento do seu cachorro em poucos dias.
      </p>
      <div className="mt-8 w-full max-w-4xl mx-auto">
        <div 
          dangerouslySetInnerHTML={{ 
            __html: '<vturb-smartplayer id="vid-69024ccb8687c6f8d6f2a443" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
          }}
        />
        <Script
          id="vturb-player-script"
          strategy="afterInteractive"
          src="https://scripts.converteai.net/9acdea39-985e-40dc-92fd-96bd657faa49/players/69024ccb8687c6f8d6f2a443/v4/player.js"
        />
      </div>
    </section>
  );
}
