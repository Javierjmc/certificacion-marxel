export default function Card(){
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://i.pinimg.com/736x/a0/f3/1f/a0f31f1693b7060c4b4d0d4ff219fb5e.jpg" alt="Volcan imagen"/>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">La perspectiva del volcan</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet adipisci architecto, magni mollitia rem. Fuga dolores excepturi est atque quos optio quia reiciendis, odit ex laboriosam nostrum ratione minima.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 active:bg-gray-400 ">#8-Bits</button>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 active:bg-gray-400  ">#Paisaje</button>
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 active:bg-gray-400 ">#volcan</button>
            </div>
        </div>
        </>
    )
}