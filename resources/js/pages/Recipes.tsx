import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/Footer";
import ProductHeader from "../components/ProductHeader";
import ProductCategories from "../components/ProductCategories";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import Api from "../utils/apis";
import { VALUES } from "../utils/values"
import Items from "../components/Items";

var hosturl = VALUES.itemsBaseApiEndpoint;


const RecipesPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<Item>>()
    const [categoryFilter, setCategoryFilter] = useState("all")

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);
        getItems();
        const selCat = new Functions().getSelectedCategory()
        console.log("Selected category is "+selCat)
        selCat == "" ? setCategoryFilter("all") : setCategoryFilter(selCat)
    },[])

    const getItems = ()=>{
        new Api().GET_(`${hosturl}/v1/items`).then(response=>{
            console.log("Response received is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setItems(response.data.Items);
                } else {
                    console.log("ERROR");
                }
            } else {
                console.log("ERROR");
            }
        }).catch(error => {
            // setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    return <div className="products-section">
        {/* <ProductHeader /> */}
        <Container className="recipes-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row>
                <Col>
                    <h1>Recipes</h1>
                    <br/>
                    <Row>
                        <Col>
                            <h3>STEW (GRAVY)</h3>
                            <p>
                            Ingredients: Vegetable oil, Kori onion-pepper mix, Kori ginger-garlic paste, Kori marinades (chicken, meat, fish depending on protein type), tomatoes, salt, cube (optional)
                            </p>
                            <h5>Steps</h5>
                            <p>
                                <ul>
                                    <li>Heat oil in a saucepan and sauté Kori onion-pepper mix and Kori ginger-garlic paste and stir.</li>
                                    <li>Add tomatoes and allow to simmer for sometime</li>
                                    <li>Add protein broth and a pinch of kori stew spice mix</li>
                                    <li>Food is ready!</li>
                                </ul>
                            </p>
                        </Col>
                        {/* <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-42.jpg" height="500px" />
                        </Col> */}
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        {/* <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-42.jpg" height="500px" />
                        </Col> */}
                        <Col>
                            <h3>CRISPY CHICKEN</h3>
                            <p>
                            Ingredients: Vegetable oil, Kori ginger-garlic paste, Kori white vinegar, Kori chicken coating mix, Kori chicken marinade, egg
                            </p>
                            <h5>Steps</h5>
                            <p>
                                <ul>
                                    <li>Soak chicken with warm water and add Kori white vinegar for about 10 minutes. The vinegar removes all the gooey, fatty residue from chicken skin so that chicken parts hold coating better.</li>
                                    <li>Rinse off vinegar water and pat chicken pieces dry.</li>
                                    <li>Marinate chicken with Kori chicken marinade  for about 15 minutes</li>
                                    <li>Allow  steamed chicken to cool down</li>
                                    <li>while cooling, break an egg, add a tablespoon of  water with just a drop of vinegar, whisk and set aside</li>
                                    <li>Pour a sizeable amount of Kori chicken coating into a zip lock bag</li>
                                    <li>With your egg solution and kori chicken coating mix set side by side, dip a piece of chicken into the egg solution, shake off any excesses and coat with a coating mix. Repeat this process, depending on how thick you want your coat . Do this for all chicken pieces.</li>
                                    <li>Set coated chicken aside for 3 minutes  while you heat your oil  for frying</li>
                                    <li>Maintain a medium high heat to avoid burning the coat and yet having the chicken well fried.</li>
                                    <li>Enjoy your Kori made-easy crispy chicken!</li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        <Col>
                            <h3>SOUP</h3>
                            <p>
                            Ingredients: Kori onion-pepper mix, Kori ginger-garlic paste, tomatoes, Kori garden eggs and turkey berry powder, preferred protein (chicken, meat, fish) Kori marinade (chicken, meat, fish), salt
                            </p>
                            <h5>Steps</h5>
                            <p>
                                <ul>
                                    <li>Marinate preferred protein (meat, fish, chicken) for about 30 minutes and pour into a saucepan . Adjust salt to your preference, Add cube if you prefer to.</li>
                                    <li>Add a teaspoon of ginger garlic and onion pepper paste as  you may prefer</li>
                                    <li>Cook meat until medium tender and add tomatoes and some water</li>
                                    <li>Boil under medium heat for some time, then dish out protein to prevent dissolution</li>
                                    <li>Continue boiling under medium heat and add Kori garden eggs and turkey berry powder for thickening and add protein back into the soup.</li>
                                </ul>
                            </p>
                        </Col>
                        <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-412.jpg" height="500px" />
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        {/* <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-42.jpg" height="500px" />
                        </Col> */}
                        <Col>
                            <h2>KORI “SHARP SHARP” MEALS</h2>
                            <br/>
                            <h3>SPECIAL ANGWAMO WITH KORI SHITO/ KORI GREEN PEPPER SAUCE</h3>
                            <p>
                            Ingredients: Rice, vegetable oil, Kori shito/ Kori green pepper sauce, Kori chicken marinade, onions, egg, salt
                            </p>
                            <h5>Steps</h5>
                            <p>
                                <ul>
                                    <li>Heat the oil on a medium heat and add diced onions</li>
                                    <li>Fry the onions until nicely browned.</li>
                                    <li>Fry rice in the oil and add a few tablespoons of Kori chicken,/meat marinade.</li>
                                    <li>Add salt to taste</li>
                                    <li>Add 1.5 of boiled water to the fried rice</li>
                                    <li>Cover the saucepan and allow rice to cook</li>
                                    <li>Serve with Kori shito/ Kori green pepper sauce and fried eggs (if preferred)</li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        <Col>
                            <h3>JOLLOF RICE</h3>
                            <p>
                            Ingredients: Rice, oil, Kori onion-pepper, Kori ginger-garlic paste, tomatoes. Kori marinade, Kori Jollof Mix
                            </p>
                            <h5>Steps</h5>
                            <p>
                                <ul>
                                    <li>Heat oil in a saucepan and sauté Kori onion-pepper mix. Add Kori ginger-garlic paste and stir.</li>
                                    <li>Add tomatoes and allow to simmer for sometime</li>
                                    <li>Add protein broth and preferred Kori marinade (chicken, meat, fish)</li>
                                    <li>Pour rice into stew and stir</li>
                                    <li>Add some boiled water and combine well</li>
                                    <li>Add koris jollof mix and stir well. Taste for salt</li>
                                    <li>Cover the pot and leave to cook on low to medium heat</li>
                                    <li>Stir occasionally until ready.</li>
                                    <li>Serve and enjoy</li>
                                </ul>
                            </p>
                        </Col>
                        <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-42.jpg" height="500px" />
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-41.jpg" height="500px" />
                        </Col>
                        <Col>
                            <h3>KELEWELE</h3>
                            <p>
                            Ingredients: vegetable oil, ripe plantain, salt
                            </p>
                            <h5>Steps</h5>
                            <p>The best plantain for kelewele is the very ripe plantain.</p>
                            <p>
                                <ul>
                                    <li>Wash plantain and peel.</li>
                                    <li>Cut peeled plantain into pieces</li>
                                    <li>Add a good amount of Koris Kelewele spice mix</li>
                                    <li>Allow it to marinate for 15 minutes</li>
                                    <li>Heat oil and fry until golden dark colour</li>
                                    <li>Best with groundnut paste, kori green pepper, koris khebab powder and fried gizzard</li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        <Col>
                            <h3>KORI  ‘GIZKELE’</h3>
                            <p>
                            Ingredients: Ripe plantain, chicken gizzard, tomatoes, Kori onion-pepper, Kori ginger-garlic paste, Kori kelewele spices, Kori chicken marinade, bell pepper and carrot(optional)
                            </p>
                            <h5>Steps</h5>
                            <p>
                                <ul>
                                    <li>Wash, chop and marinate gizzard with Kori chicken marinade for about 30 minutes.</li>
                                    <li>Fry gizzard in hot oil for about 10 minutes</li>
                                    <li>Pour Kori kelewele mix onto sliced plantain, stir and fry.</li>
                                    <li>Heat oil in saucepan and sauté Kori onion-pepper mix. Add Kori ginger-garlic paste and stir.</li>
                                    <li>Add sliced tomatoes, bell pepper and carrot. Allow to simmer for a few minutes.</li>
                                    <li>Pour fried gizzard and and kelewele in sauce and stir</li>
                                    <li>Can be served as a course meal or side dish</li>
                                </ul>
                            </p>
                        </Col>
                        <Col>
                            <img src="/assets/images/PHOTO-2024-07-22-19-12-403.jpg" height="500px" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('recipes')){
    createRoot(document.getElementById('recipes')!).render(<RecipesPage />)
}