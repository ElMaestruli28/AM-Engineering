import Giscus from '@giscus/react';

export default function MyApp() {
  return (
    <div className='mx-auto w-3/4 pt-10'>
    <Giscus
      id="comments"
      repo="ElMaestruli28/AM-Engineering"
      repoId="R_kgDOKDLi1g"
      category="Q&A"
      categoryId="DIC_kwDOKDLi1s4CYVkb"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="es"
      loading="lazy"
      />
      </div>
  );
}