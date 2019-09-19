<template>
  <div class="chat container">
    <h2 class="center teal-text">Leave me a message!</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import NewMessage from "./NewMessage";
import db from "../firebase/init";
export default {
  name: "Chat",
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  props: ["name"],
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>
<style >
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  text-align: left;
  font-size: 1.4em;
  padding: 3px;
}
.chat .time {
  text-align: left;
  display: block;
  font-size: 1rem;
}
ul li {
  text-align: left;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 5px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
.liz {
  float: right;
}
</style>
