import { Component, OnInit } from '@angular/core';
import { database } from 'src/assets/json/database';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  show3;
  x = 0;
  y = 0;
  members;
  myControl = new FormControl();
  filteredOptions: Observable<any>;

  ////
  menuHidden = false
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.getMainData();
  }
  getMainData() {
    const arr = []
    for (let i = 0; i < database.members.length; i++) {
      arr.push(database.members[i]["main-data"])
      arr[i].index = database.members[i].index
    }
    this.members = arr
  }

  toggle() {
    $('#sidebar').toggleClass('active');
    $('#container1').toggleClass('size');
    this.menuHidden = !this.menuHidden
  }

  fun() {
    if (this.x === 0) {
      this.x = 1;
    } else {
      this.x = 0;
    }
  }
  toggleCalculator() {
    this.show3 = !this.show3;
    this.run();
  }
  run() {
    $(document).ready(function () {
      $(function () {
        $('.button').click(function () {
          var num = $(this).html();
          checkButtonValue(num);
        });
      });

      //A function that checks the value of the button
      function checkButtonValue(button) {
        if (/[0-9]/.test(button)) {
          addTextToScreen(button);
        } else if (/[\u00F7\u00D7+-.]/.test(button)) {
          var currentValue = $('#value').html();
          if (currentValue !== '0') {
            if (!wasCalcButton()) {
              addTextToScreen(button);
            }
          }
        } else if (/C/.test(button)) {
          $('#value').html('0');
        } else if (/%/.test(button)) {
          runCalc();
          var percentNum = parseFloat($('#value').html()) / 100;
          $('#value').html(percentNum.toString());
        } else if (/=/.test(button)) {
          runCalc();
        } else if (/\u00B1/.test(button)) {
          runCalc();
          var negativeNum = <any>$('#value').html() * -1;
          $('#value').html(negativeNum.toString());
        }
      }

      //A function that checks if there is text in the screen.  If there is then return true.
      function checkScreen() {
        return $('#value').text().length > 0;
      }

      //A function that adds text to the screen
      function addTextToScreen(num) {
        if ($('#value').html() !== '0') {
          var val = $('#value').html();
          $('#value').html(val + num);
        } else {
          $('#value').html(num);
        }
      }

      //Checks to see if previous button was an operator, returns true or false
      function wasCalcButton() {
        var currentValue = $('#value').html();
        var valueLength = currentValue.length;
        var finalElement = currentValue.substring(valueLength - 1);
        return /[\u00F7\u00D7+-]/.test(finalElement);
      }

      //A function that reads in the text and makes it into an array
      function makeValueIntoArray() {
        var valueString = $('#value').html();
        var valueArray = [];
        var elementHolder = '';
        for (var i = 0; i < valueString.length; i++) {
          if (/[0-9]/.test(valueString[i])) {
            elementHolder += valueString[i];
          } else {
            if (elementHolder !== '') {
              valueArray.push(elementHolder);
            }
            valueArray.push(valueString[i]);
            elementHolder = '';
          }
        }
        valueArray.push(elementHolder);

        return valueArray;
      }

      //A function that runs the calculation of all the elements
      function runCalc() {
        var valueArray = makeValueIntoArray();
        if (valueArray[0] === '-') {
          valueArray[1] = valueArray[0] + valueArray[1];
          valueArray.shift();
        }
        console.log(valueArray);
        valueArray = decimalPoints(valueArray);
        console.log(valueArray);
        valueArray = division(valueArray);
        console.log(valueArray);
        valueArray = multiplication(valueArray);
        console.log(valueArray);
        valueArray = addition(valueArray);
        console.log(valueArray);
        valueArray = subtraction(valueArray);
        console.log(valueArray);
        $('#value').html(valueArray[0]);
      }

      //Combine decimal points
      function decimalPoints(array) {
        while (array.indexOf('.') > 0) {
          var location = array.indexOf('.');

          array[location] = array[location - 1] + '.' + array[location + 1];
          array[location - 1] = 'null';
          array[location + 1] = 'null';
          array = array.filter(function (element) {
            return element !== 'null';
          });
        }
        return array;
      }

      //Division Function
      function division(array) {
        while (array.indexOf('\u00F7') > 0) {
          var location = array.indexOf('\u00F7');

          array[location] =
            parseFloat(array[location - 1]) / parseFloat(array[location + 1]);
          array[location - 1] = 'null';
          array[location + 1] = 'null';
          array = array.filter(function (element) {
            return element !== 'null';
          });
        }
        return array;
      }

      //Multiplication Function
      function multiplication(array) {
        while (array.indexOf('\u00D7') > 0) {
          var location = array.indexOf('\u00D7');

          array[location] =
            parseFloat(array[location - 1]) * parseFloat(array[location + 1]);
          array[location - 1] = 'null';
          array[location + 1] = 'null';
          array = array.filter(function (element) {
            return element !== 'null';
          });
        }
        return array;
      }

      //Addition Function
      function addition(array) {
        while (array.indexOf('+') > 0) {
          var location = array.indexOf('+');

          array[location] =
            parseFloat(array[location - 1]) + parseFloat(array[location + 1]);
          array[location - 1] = 'null';
          array[location + 1] = 'null';
          array = array.filter(function (element) {
            return element !== 'null';
          });
        }
        return array;
      }

      function subtraction(array) {
        while (array.indexOf('-') > 0) {
          var location = array.indexOf('-');

          array[location] =
            parseFloat(array[location - 1]) - parseFloat(array[location + 1]);
          array[location - 1] = 'null';
          array[location + 1] = 'null';
          array = array.filter(function (element) {
            return element !== 'null';
          });
        }
        return array;
      }
    });
  }
}
