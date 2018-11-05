package io.data2viz.play

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.application.log
import io.ktor.features.CallLogging
import io.ktor.features.Compression
import io.ktor.html.respondHtml
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respondRedirect
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import kotlinx.html.*
import org.slf4j.LoggerFactory
import java.util.Locale
import java.text.Normalizer
import java.util.regex.Pattern


val logger = LoggerFactory.getLogger("io.data2viz.play")!!

fun main(args: Array<String>) {
    embeddedServer(
        factory = Netty,
        port = 8080) {
        mainModule()
    }.start(wait = true)
}


val documentation = Articles("documentation")

fun Application.mainModule() {
    install(Compression)
    install(CallLogging)
    routing {
        trace { application.log.trace(it.buildText()) }
        documentation.mdFiles.forEach { docFile ->
            get(docFile.url) {
                call.respondHtml {
                    generateDocumentationPage(docFile)
                }
            }
        }
        get("/") { call.respondRedirect(documentation.mdFiles.first().url)}

        static("/") {
            resources("public")
        }
    }
}

private fun HTML.generateDocumentationPage(docFile: MdFileDescriptor) {
    head {
        unsafe {
            //language=HTML
            +"""
			    <meta charset="UTF-8">
				<meta name="viewport"
				content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>play:documentation</title>
  				<script src="https://unpkg.com/@data2viz/kotlin-playground@1"></script>
				<link rel="stylesheet" href="/main.css">
                <link rel="icon" type="image/png" href="/favicon.png" />""".trimIndent()
        }
    }
    body {
        div {
            header {
                id = "d2v-header"
                unsafe {
                    //language=HTML
                    +"""
							<div class="wrap">
                                <div id="current-section-name"></div>
                                <div class="left">
                                    <a href='/' class="d2v-home-logo">
                                        <img src="/images/logo-play.png" class="logo">
                                    </a>
                                </div>
                            </div>"""
//                            <div class="github-link-wrapper">
//                                <a href="https://github.com/data2viz/data2viz" class="github-corner" aria-label="View source on GitHub">
//                                    <svg width="80" height="80" viewBox="0 0 250 250"
//                                         style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
//                                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
//                                        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
//                                              fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
//                                        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
//                                              fill="currentColor" class="octo-body"></path>
//                                    </svg>
//                                </a>
//                                <style>.github-corner:hover .octo-arm {
//                                    animation: octocat-wave 560ms ease-in-out
//                                }
//
//                                @keyframes octocat-wave {
//                                    0%, 100% {
//                                        transform: rotate(0)
//                                    }
//                                    20%, 60% {
//                                        transform: rotate(-25deg)
//                                    }
//                                    40%, 80% {
//                                        transform: rotate(10deg)
//                                    }
//                                }
//
//                                @media (max-width: 500px) {
//                                    .github-corner:hover .octo-arm {
//                                        animation: none
//                                    }
//
//                                    .github-corner .octo-arm {
//                                        animation: octocat-wave 560ms ease-in-out
//                                    }
//                                }</style>
//                            </div>

                }
            }
            div {
                id = "d2v-menu"
                div("wrap") {
                    ul("menu d2v-menu-vertical") {
                        id = "site-navigation"
                        documentation.mdFiles.forEach { page ->
                            val currentPage = (docFile.title == page.title)
                            li("page ${if (currentPage) "active" else "unactive"}") {
                                a("/${page.url}") { +page.title }
                                if (page.chapters.isNotEmpty() && currentPage) {
                                    ul("chapters") {
                                        page.chapters.forEach { chapter ->
                                            li("chapter") {
                                                a(href = "#${chapter.anchor}") { +chapter.title }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            section {
                id = "d2v-content"
                main {
                    id = "d2v-main"
                    div {
                        classes += "site-text"
                        unsafe {
                            +docFile.htmlContent
                        }
                    }
                }
            }
        }
        footer {
            id = "d2v-footer"
            //language=HTML
            unsafe {
                + """
                    <div class="wrap">
                        <ul class="d2v-menu-vertical">
                            <li>
                                <a href="https://data2viz.io/" target="_blank">
                                    <img id="logo-footer" src="/images/logo-negative.png" width="1110" height="360">
                                </a>
                            </li>
                            <li class="no-marge">Data2viz sàrl</li>
                            <li>Boulevard Georges-Favon 3</li>
                            <li>1204 Genève</li>
                            <li>Suisse</li>
                        </ul>
                    </div>
                """.trimIndent()
            }
        }
        script("text/javascript", "/main.js"){}
    }
}

private val MdChapterDescriptor.anchor: String
    get() = title.slug

private val NONLATIN = Pattern.compile("[^\\w-]")
private val WHITESPACE = Pattern.compile("[\\s]")


val String.slug: String
    get() {
        val nowhitespace = WHITESPACE.matcher(this).replaceAll("-")
        val normalized = Normalizer.normalize(nowhitespace, Normalizer.Form.NFD)
        val slug = NONLATIN.matcher(normalized).replaceAll("")
        return slug.toLowerCase(Locale.ENGLISH)
    }
