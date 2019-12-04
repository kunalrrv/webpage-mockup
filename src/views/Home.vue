<template>
    <div class="home">
        <div class="sidebar-navigation">
            <div class="logo-container">
                <img alt="LogDNA logo" src="@/assets/logdna-icon.png" />
            </div><!--/ logo-container -->
            <div class="navigation">
                <ul>
                    <li :class="[index==1 ? 'active': '']" v-for="index in 4" :key="index">
                        <a>
                            <img src="https://via.placeholder.com/40"/>
                            <p>⌘ {{index}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div><!--/ sidebar -->
        <div class="header-section">
            <h1>What is Lorem Ipsum?</h1>
        </div><!--/ header-section -->

        <div class="main-container">
            <div class="list-container text-left">
                <div class="list-item" :key="index" v-for="index in 10">
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis. Feugiat vivamus at augue eget arcu. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Parturient montes nascetur ridiculus mus mauris vitae. Turpis egestas integer eget aliquet nibh. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. At risus viverra adipiscing at.</p>
                </div><!--/ list-item -->
            </div><!--/ list-container text-left -->
            <div class="list-info-container text-left">
                <div class="list-info-header">
                    <h2>Diam quis enim lobortis scelerisque fermentum</h2>
                    <p><i>Elementum nisi quis eleifend quam adipiscing. Netus et malesuada fames ac turpis egestas maecenas.</i></p>
                </div>
                <div class="list-info-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Mauris sit amet massa vitae. Nulla at volutpat diam ut venenatis tellus. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Sit amet tellus cras adipiscing enim eu. Justo laoreet sit amet cursus sit amet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Sit amet dictum sit amet justo. Vehicula ipsum a arcu cursus vitae congue mauris. Placerat duis ultricies lacus sed turpis tincidunt. Ultricies integer quis auctor elit sed vulputate mi sit. Est ante in nibh mauris cursus mattis molestie.</p>

                    <p>Suscipit tellus mauris a diam maecenas sed. Venenatis a condimentum vitae sapien pellentesque habitant. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Cras adipiscing enim eu turpis egestas pretium aenean. In ante metus dictum at. Ac tortor vitae purus faucibus. Viverra maecenas accumsan lacus vel. Consectetur lorem donec massa sapien faucibus et molestie ac. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Turpis in eu mi bibendum neque egestas congue. Enim nulla aliquet porttitor lacus. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vitae et leo duis ut diam quam nulla. Fames ac turpis egestas integer eget aliquet nibh. Orci a scelerisque purus semper eget duis. Eu non diam phasellus vestibulum lorem sed. Lacus sed turpis tincidunt id aliquet. Iaculis nunc sed augue lacus viverra vitae congue.</p>
                    <div class="info-image-container">
                        <img src="https://place-hold.it/600x200"/>
                        <figcaption>Justo laoreet sit amet cursus sit amet.</figcaption>
                    </div>
                </div><!--/ list-info-content -->
            </div><!--/ list-info-container -->
        </div><!--/ main-container -->

        <div class="message-container">
            <input id="message-input" v-model="message" type="text" placeholder="Message..">
            <button @click="primaryAction">Submit</button>
        </div><!-- /message-container -->
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    primaryAction() {
      if (this.message === '' || this.message === 'error') {
        alert('Input Error, Please enter correct input');
        this.message = '';
        document.querySelector('#message-input').focus();
      } else {
        alert(`Message Submitted Successfully: ${this.message}`);
        this.message = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header-section {
    position: fixed;
    top: 0;
    left: 100px;
    right: 0;
    min-height: 60px;
    padding: 20px 10px;
    text-align: left;
    line-height: 60px;

    background-color: #ffffff;
    border-bottom: 2px solid #999999;
    box-shadow: 0 2px 10px 0px #999999;
}

.main-container {
    display: flex;
}

.list-container {
    .list-item {
        background-color: #e2e2e2;
        padding: 20px 10px;
        border-bottom: 1px solid #999999;
        height: 80px;
        width: 400px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        h3, p {
            margin-bottom: 10px;
        }
        p {
            white-space: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

.list-info-container {
    border-left: 1px solid #999999;
    padding: 30px 30px 130px 30px;
    position: relative;
    z-index: -1;
    h2, p {
        margin-bottom: 10px;
    }
    p {
        line-height: 1.3rem;
    }
    .list-info-header {
        padding-bottom: 10px;
        p{
            i {
                font-style: italic;
            }
        }
    }
    .list-info-content {
        margin-bottom: 50px;
        .info-image-container {
            max-width: 600px;
            margin: 50px auto 0;
            text-align: center;
            img {
                max-width: 100%;
            }
            figcaption {
                font-style: italic;
            }
        }
    }
}
.message-container {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    min-height: 60px;
    padding: 20px 50px;
    margin-left: 521px;
    display: flex;
    background-color: #e2e2e2;
    border-top: 1px solid #999999;
    input {
        padding: 5px;
        width: 100%;
        border: 2px solid #999999;
    }
    button {
        width: 100px;
        border: 2px solid #999999;
        border-left-width: 0px;
    }
}
</style>
