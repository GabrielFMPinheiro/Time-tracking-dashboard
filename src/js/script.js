const main = document.querySelector('#main-container');

async function filterObjByPeriod(period) {
  const response = await fetch('./src/data.json');
  const data = await response.json();

  const newData = Object.values(data).map((e) => ({
    title: e.title,
    period: period,
    timeframes: e.timeframes[period],
    image: e.image,
    bg: e.bg,
  }));

  createSections(newData, period);
}

function checkDate(period) {
  if (period === 'daily') {
    return 'Last day';
  } else if (period === 'weekly') {
    return 'Last Week';
  } else {
    return 'Last Month';
  }
}

function capitalizeFirstLetter(string) {
  // ref: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function createSections(data, period) {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => card.remove());
  data.forEach((task) => {
    const section = `
    <section class="card ${task.bg}">
        <img
          src=${task.image}
          alt="${task.title} icon"
          class="absolute right-2 -top-2 -z-10 lg:right-4 lg:-top-3"
        />
        <div
          class="card-data"
        >
          <div class="flex items-center justify-between">
            <h1 class="text-white font-medium text-lg">${capitalizeFirstLetter(
              task.title
            )}</h1>
            <img
              src="./src/images/icon-ellipsis.svg"
              alt="ellipsis"
              class="cursor-pointer hover:brightness-200"
            />
          </div>
          <div
            class="time"
          >
            <h2 class="text-white font-thin text-4xl lg:text-6xl">${
              task.timeframes.current
            }hrs</h2>
            <h3 class="text-pale_blue font-normal text-sm lg:mb-2">
              ${checkDate(task.period)} - ${task.timeframes.previous}hrs
            </h3>
          </div>
        </div>
      </section>
    `;

    const rangeFrag = document.createRange().createContextualFragment(section);
    main.appendChild(rangeFrag);
  });
}

const nav = document.querySelectorAll('li');

nav.forEach((e) =>
  e.addEventListener('click', (event) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    event.target.classList.add('active');
    const newActive = document.querySelector('.active');
    filterObjByPeriod(newActive.innerText.toLowerCase());
  })
);

window.onload = function () {
  filterObjByPeriod('weekly');
};
