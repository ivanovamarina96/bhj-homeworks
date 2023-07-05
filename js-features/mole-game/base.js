(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`), //сюда присваивается лунка
    deactivateHole = index =>   //деактивация
      getHole( index ).className = 'hole',
    activateHole = index => //активация
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})

();


