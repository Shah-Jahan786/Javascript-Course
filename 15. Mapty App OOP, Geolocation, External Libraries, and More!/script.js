'use strict';

// 11. Managing Workout Data Creating Classes
class Workout {
    date = new Date();
    id = (Date.now() + "").slice(-10);

    constructor(coords, distance, duration) {
        // this.date = ...
        // this.id = ...
        this.coords = coords; // {lat, long}
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    _setDescription () {
        // Prettier ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUppercase()}${this.type.slice(1)} on ${
            months[this.date.getMonth()]
        }${this.date.getDate()}`
    }
};

// video 11
class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        // min / km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        // this.type = 'cycling';
        this.calcSpeed();
        this._setDescription();
    }
    calcSpeed() {
        // km / h
        this.speed = this.distance / this.duration / 60;
        return this.speed;
    }
};

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

/////////////////////////////////////// 10. Refactoring for Project Architecture
// Application Architecture
// prettier-ignore
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workout');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;
    #mapEvent;
    #workouts = [];


    constructor() {
        this._getPosition();
        ///////////////// 8. Rendering Workout Input Form
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }


    _getPosition() {
        ////////////////////////////////////////////////////////// 
        // 5. Using the Geolocation API
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert(`could not get your position`)
            }
            )
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        console.log(this);
        this.#map = L.map('map').setView(coords, 13);
        // console.log(map);

        // this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        ////////////////////////////////////////////////////////// 
        // 6. Displaying a Map Using Leaflet Library
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        // handling click on map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validInputs = (...inputs) =>
            inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();
        // console.log(this);

        // 1) Get data from form (12)
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        // 3) if workout is running, creat running object (12)
        if (type === "running") {
            const cadence = +inputCadence.value;
            // 2) Check if data is valid (12)
            if (
                // Number.isFinite(distance) ||
                //    Number.isFinite(duration) ||
                //    Number.isFinite(cadence)
                !validInputs(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
            )
                return alert('input have to be positive numbers');
                // console.log('running');
                

            workout = new Running([lat, lng], distance, duration, cadence);
        };

        // 4) if workout is cycling, creat cycling object (12)
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            if (
                !validInputs(distance, duration, elevation) ||
                !allPositive(distance, duration)
            ) 
                return alert('input have to be positive numbers');

                workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        // 5) Add new object, to workout array (12)
        this.#workouts.push(workout);
        console.log(workout);

        // 6) Rander workout on map as marker (12)
        this._renderWorkoutMarker(workout);
    
        // 7) Rander workout on  list (12)
        this._renderWorkout(workout);

        // 8) Hide form * clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    }
    _renderWorkoutMarker (workout) {
            // 7. Displaying a Map Marker
        L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        })
      )
            .setPopupContent('workout')
            .openPopup();
    }

    ///////////////// 13. Rendering Workouts
    _renderWorkout(workout) {
        const html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">Running on April 14</h2>
          <div class="workout__details">
            <span class="workout__icon">${
                workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `
    }
};

// console.log(firstName);

const app = new App();
