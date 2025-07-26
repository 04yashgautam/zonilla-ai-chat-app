import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Jane Doe</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        
        <div className="info">


            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Shared Photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <img src="./bg.jpg" alt="" />
                        <span>photo_2020.png</span>
                    </div>
                    <img src="./download.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>   

        </div>
    </div>
  );
};

export default Detail