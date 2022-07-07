<template>
  <div class="table">
    <div class="table__header" v-if="mainTable.users">
      <span>Contact name</span>
      <span>Country</span>
      <span>Email</span>
      <span>Created</span>
      <span>Credit</span>
      <span>State</span>
    </div>
    <div v-for="user in mainTable.users" :key="user.id" class="table__maim">
      <span>{{ user.contact_name }}</span>
      <span>{{ user.country }}</span>
      <span>{{ user.email }}</span>
      <span>{{ user.created }}</span>
      <span>{{ user.credit }}</span>
      <span>{{ user.state }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainTable: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="sass" scoped>
.table
  @include xxxs
    flex-direction: column
.table__header
  display: grid
  grid-template-columns: 18% 18% 21% 20% 19% 10%
  border: 1px solid
  padding: 20px
  border-radius: 5px
  background-color: #C0C0C0
  @include xxs
    grid-template-columns: 17% 17% 21% 22% 16% 7%
    font-size: 14px
  @include xxxs
    display: none

.table__maim
  display: flex
  justify-content: center
  flex-direction: row
  gap: 100px
  border: 1px solid
  padding: 20px
  border-radius: 5px
  @include s
    gap: 25px
  @include xs
    gap: 5px
  @include xxs
    gap: 0px
    font-size: 14px
  @include xxs
    flex-direction: column

span
  padding-right: 10px

span:last-child
  padding-right: 0
</style>
