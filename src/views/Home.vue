<template>
    <div class="home">
        <div class="sidebar-navigation">
            <div class="logo-container">
                <img alt="LogDNA logo" src="@/assets/logdna-icon.png" />
            </div><!--/ logo-container -->
            <div class="navigation">
                <ul>
                    <li class="active">
                        <a>
                            <img src="https://via.placeholder.com/40"/>
                            <p>⌘ 1</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="https://via.placeholder.com/40"/>
                            <p>⌘ 2</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="https://via.placeholder.com/40"/>
                            <p>⌘ 3</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="https://via.placeholder.com/40"/>
                            <p>⌘ 4</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div><!--/ sidebar -->
        <div class="header-section">
            <h1>What is Lorem Ipsum?</h1>
        </div><!--/ header-section -->

        <div class="main-container">
        </div><!--/ main-container -->
    </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="scss">
.header-section {
    position: fixed;
    top: 0;
    left: 100px;
    right: 0;
    height: 60px;
    padding: 20px 10px;
    text-align: left;
    line-height: 60px;

    border-bottom: 2px solid #e2e2e2;
    box-shadow: 0 2px 10px 0px #e2e2e2;
}

.main-container {

}
</style>
