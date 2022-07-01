import './App.css';

function App() {
  return (
    <div className="Wrapper">
      <Card
      img="https://preview.redd.it/xl8ppc0pnw881.png?width=960&crop=smart&auto=webp&s=61b9a7259bf4f6237c8f409937cd04a91a05ab12"
          title="Ford GT Nasa Edition"
          description="Fords GT nasa edition "/>
       <Card
      img="https://images.hdqwalls.com/wallpapers/2017-ford-gt-2-wide.jpg"
          title="Ford GT"
          description="Classic mucle power"/>
      <Card
      img="https://i.pinimg.com/736x/ab/03/00/ab0300490972b5f248b855fadf032f99.jpg"
          title="Hellephant"
          description="Dodge Challenger, 1000HP"/>
      <Card
      img="https://i.pinimg.com/originals/1b/98/3a/1b983aa14c5a57068c821c4887dfc576.jpg"
          title="Jeep"
          description="Wrangler Sahara"/>

    </div>
  );
}

function Card(Props) {
  return (
    <div className="Card">
      <div className= "Card_body">
        <img src={Props.img} className="Card_image"/>
        <h2 className='Card_title'>{Props.title}</h2>
        <p className='Class_description'>{Props.description}</p>
      </div>
      <button className='Card_btn'>View </button>
    </div>

  );
}
export default App;
