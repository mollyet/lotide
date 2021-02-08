const assertEqual = require("../assertEqual");



assertEqual("LHL", "LHL"); //pass 
assertEqual(1, 1); //pass0
assertEqual(1, 2); //fail
assertEqual(42, "cheese"); //fail