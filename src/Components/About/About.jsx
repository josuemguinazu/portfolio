export const About = () => {
  const info = [
    { logo: 'logo', title: 'titulo', desc: 'descripcion de lo que sea' },
    { logo: 'logo', title: 'titulo', desc: 'descripcion de lo que sea' },
    { logo: 'logo', title: 'titulo', desc: 'descripcion de lo que sea' },
    { logo: 'logo', title: 'titulo', desc: 'descripcion de lo que sea' },
  ];
  return (
    <>
      <div className='About'>
        {info.map((el) => {
          return (
            <>
              <div className='AboutItems'>
                <div>{el.logo}</div>
                <h3>{el.title}</h3>
                <h4>{el.desc}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
