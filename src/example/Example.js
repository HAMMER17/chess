
function App() {
  // const shessWhite = ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖']
  // const shessBlack = ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖']
  const shessBlack = ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜']
  const shessWhite = ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜']

  const a = '♙'
  const b = '♙'
  // const b = '♟'
  // const a = '♟'
  const figure = [{
    img: '',
    x: 0,
    y: 0,
  }]
  for (let i = 0; i < 8; i++) {
    figure.push({ color: 'green', img: a, x: 1, y: i })
    figure.push({ color: 'red', img: b, x: 6, y: i })
  }
  figure.push({ color: 'green', img: shessWhite[0], x: 0, y: 0 })
  figure.push({ color: 'green', img: shessWhite[7], x: 0, y: 7 })
  figure.push({ color: 'green', img: shessWhite[1], x: 0, y: 1 })
  figure.push({ color: 'green', img: shessWhite[6], x: 0, y: 6 })
  figure.push({ color: 'green', img: shessWhite[2], x: 0, y: 2 })
  figure.push({ color: 'green', img: shessWhite[5], x: 0, y: 5 })
  figure.push({ color: 'green', img: shessWhite[3], x: 0, y: 3 })
  figure.push({ color: 'green', img: shessWhite[4], x: 0, y: 4 })

  figure.push({ color: 'red', img: shessBlack[0], x: 7, y: 0 })
  figure.push({ color: 'red', img: shessBlack[7], x: 7, y: 7 })
  figure.push({ color: 'red', img: shessBlack[1], x: 7, y: 1 })
  figure.push({ color: 'red', img: shessBlack[6], x: 7, y: 6 })
  figure.push({ color: 'red', img: shessBlack[2], x: 7, y: 2 })
  figure.push({ color: 'red', img: shessBlack[5], x: 7, y: 5 })
  figure.push({ color: 'red', img: shessBlack[3], x: 7, y: 3 })
  figure.push({ color: 'red', img: shessBlack[4], x: 7, y: 4 })


  let elem = []
  for (let i = 0; i < 8; i++) {
    let item = []
    for (let j = 0; j < 8; j++) {
      // item.push(j)
      let images = undefined;
      let col = ''
      figure.forEach((p) => {
        if (p.x === i && p.y === j) {
          images = p.img
          col = p.color
        }
      })
      if ((i + j) % 2 !== 0) {
        item.push(<div key={Math.random()} className="elem_white"><span style={{ color: col }} className="figure_white">{images}</span></div>)
      } else
        item.push(<div key={Math.random()} className="elem_black"><span style={{ color: col }} className="figure_black">{images}</span></div>)
    }
    elem.push(item)

  }
  let active = null
  const onMouseDown = (e) => {
    const elem = e.target
    if (elem.classList.contains('shess')) {
      let x = e.clientX;
      let y = e.clientY;

      elem.style.position = 'absolute'
      elem.style.left = x + 'px';
      elem.style.top = y + 'px';
    }
    active = elem
  }
  const onMouseMove = (e) => {
    if (active) {
      let x = e.clientX - 25;
      let y = e.clientY - 25;
      active.style.position = 'absolute'
      active.style.left = x + 'px';
      active.style.top = y + 'px';

    }

  }
  const mouseUp = (e) => {
    if (active) {
      active = null
      // e.target.style.display = 'center'
      // e.target.style.textAlign = 'center'
      // e.target.style.justifyContent = 'center'

    }
  }
  const onClick = (e) => {
    let a = []
    figure.map(el => {
      if (e.target.innerHTML === el.img) {
        a.push(el)
      }
      return a
    })

  }

  return (
    <div className="container">
      <div className="word">

        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>

      </div>
      <div className="app" onClick={onClick} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={mouseUp}>
        {elem}
      </div>
      <div className="num">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>
    </div>

  );
}

export default App;
