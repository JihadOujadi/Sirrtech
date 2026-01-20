function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="30"
      height="30"
      x="0"
      y="0"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="25%" stop-color="#013553" />
          <stop offset="50%" stop-color="#1b3f62" />
          <stop offset="75%" stop-color="#1a5677"></stop>
          <stop offset="100%" stop-color="#1690a7"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="m496.128 220.361-160-144.032c-19.712-17.728-50.08-16.192-67.808 3.584-17.728 19.68-16.128 50.048 3.584 67.776l66.976 60.32H48c-26.528 0-48 21.472-48 48s21.472 48 48 48h290.944l-67.072 60.32c-19.712 17.76-21.312 48.096-3.584 67.776A48.006 48.006 0 0 0 304 448.009c11.456 0 22.944-4.064 32.096-12.32l160-143.968A48.014 48.014 0 0 0 512 256.041a48.1 48.1 0 0 0-15.872-35.68z"
          fill="url(#arrowGradient)"
          opacity="1"
        ></path>
      </g>
    </svg>
  );
}

export default Arrow;
