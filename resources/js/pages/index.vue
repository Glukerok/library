<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Журнал</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Создать книгу</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <span>Тестовое задания для стажеров (PHP)</span>
        <router-view></router-view>
        <footer>

        </footer>
    </div>
</template>

<script>
export default {
    name: "index",
}
</script>
