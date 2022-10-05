import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      (function() {
                        var w = window;
                        if (w.ChannelIO) {
                          return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                        }
                        var ch = function() {
                          ch.c(arguments);
                        };
                        ch.q = [];
                        ch.c = function(args) {
                          ch.q.push(args);
                        };
                        w.ChannelIO = ch;
                        function l() {
                          if (w.ChannelIOInitialized) {
                            return;
                          }
                          w.ChannelIOInitialized = true;
                          var s = document.createElement('script');
                          s.type = 'text/javascript';
                          s.async = true;
                          s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                          s.charset = 'UTF-8';
                          var x = document.getElementsByTagName('script')[0];
                          x.parentNode.insertBefore(s, x);
                        }
                        if (document.readyState === 'complete') {
                          l();
                        } else if (window.attachEvent) {
                          window.attachEvent('onload', l);
                        } else {
                          window.addEventListener('DOMContentLoaded', l, false);
                          window.addEventListener('load', l, false);
                        }
                      })();
                      ChannelIO('boot', {
                        "pluginKey": "018ebd11-07c3-43bd-983c-b91f6a1423ee"
                      });
                      `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
