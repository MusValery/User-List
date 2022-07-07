<template>
  <div class="loader" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.875s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(45 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.625s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(135 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.375s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(225 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.125s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(315 50 50)">
        <rect
          x="47.5"
          y="20"
          rx="2.5"
          ry="2.56"
          width="5"
          height="16"
          fill="#3053f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="sass" scoped>
.loader.loader--red svg g rect
  fill: var(--primary-color-error)

.loader.loader--green svg g rect
  fill: var(--primary-color-success)

.loader.loader--white svg g rect
  fill: var(--color-white)

.loader.loader--orange svg g rect
  fill: var(--color-orange)

.loader svg
  height: 85px
  width: 85px
  margin: auto
  display: block
  shape-rendering: auto

.loader--small svg
  height: 40px
  width: 40px

.loader.loader--blue svg g rect
  fill: var(--secondary-color-dark-blue)
</style>
