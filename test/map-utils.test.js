// IMPORT MODULES under test here:
import { renderTechnicalInfo } from '../map/map-utils.js';
//import { findByDinoId } from '../utils.js';

const test = QUnit.test;

const userTest = {

    userName: 'Alan',
    dinoArray: [
        {
            dinoId: 1,
            species: 'Raptor',
            hp: 100,
            tRexPercent: 70,
            triceratopsPercent: 20,
            pterodactylPercent: 10,
            name: 'Betty',
            description: 'This is an angry dinosaur.',
            img: 'headingImg.jpg',
            top: 35,
            left: 40,
        }
    ]
};

test('renderTechnicalInfo should take in a user and an id, and render 4 spans for dino name, species, location and description', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id="technical-info"><span>Name: Betty </span><span>Hp: 100</span><span>Days Lived: 0</span><span>Species: Raptor </span><span>Coordinates: 35N, 40W </span><span>This is an angry dinosaur.</span></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTechnicalInfo(userTest, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
