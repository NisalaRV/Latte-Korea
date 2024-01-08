import {Component} from "react";
import c1 from '../../../assets/images/c1.png'

export class About extends Component {
    render() {
        return (
            <section className="w-screen mt-12">
                <div className="flex flex-1 justify-start items-center flex-col gap-6">
                    <h5 className="font-bold mt-10 text-4xl">About</h5>
                    <p className="text-2xl uppercase font-light">Enjoy Your Free Time</p>
                </div>
                <p className=" ml-[550px] mt-5  text-left text-1xl">Latte Korea is a Korean style cafe that serves simple, natural food – including Vegan and Gluten Free options – accompanied by authentic espresso coffee. The Latte korea café is a hybrid combining a strong coffee culture and a robust food culture under one roof in a welcoming, cozy and comfortable neighborhood café.</p>
                <p className=" ml-[550px] mt-5 text-left text-1xl">Our Coffee – We serve a range of espresso coffees made from the finest coffee beans, roasted right here in Cape Coral, and our baristas really know their beans. With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cuppa. </p>
                <p className=" ml-[550px] mt-5  text-left text-1xl">Our Food – Our food is all natural, simple food made with local ingredients, wherever possible, to provide you with fresher, healthier and deliciously tasty meals. We have a well stocked pastry cabinet, our food has an international flavor and we offer gluten free, vegetarian and vegan options. </p>
                <p className=" ml-[550px] mt-5  text-left text-1xl">We also have a little attitude: Café YOU has a cool, trendy shabby chic decor and an upbeat fun atmosphere with a whole lot of colorful idioms:  </p>
                <p className=" ml-[550px] mt-5  text-left text-1xl">Coffee & sweet 🍵Bobble tea🥤 Sushi 🍣 foods 🍜 mocktails & ice tea</p>
                <div>
                    <img src={c1} alt="img" className="w-[400px] -mt-[400px]  h-full ml-20 hidden rounded-r-2xl m-2.5 md:block object-cover"/>
                </div>


            </section>
        );

    }
}
