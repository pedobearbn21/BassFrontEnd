<template>
  <div >
  <v-card class="mx-auto" max-width="750" >
    <v-card-text>
      <div class="display text--primary" >ระเบิดเวลา อ้าาาา</div>
      <p class="display text--primary">
        แกะเพลง ระเบิดเวลาอ้าาาาา
      </p>
    <v-divider></v-divider>
    <v-row class="content justify-center">
    <v-col class="text-center" cols="12" sm="4">
    <div>
       <v-btn small >Comment</v-btn>
    </div>
    </v-col>
    </v-row>

    <div>
      <v-expansion-panels >
        <v-expansion-panel
           v-for="(item,i) in 1"
           :key="i"
        >
        <v-expansion-panel-header >Comment</v-expansion-panel-header>
          <v-expansion-panel-content class="text-center" cols="12" sm="4" >เพลงอะไรครับเนี่ย</v-expansion-panel-content>
        </v-expansion-panel>
          </v-expansion-panels>
    </div>
   </v-card-text>
   </v-card>
</div>
</template>
