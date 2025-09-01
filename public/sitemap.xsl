<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Elanswer XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            color: #333;
            background: #f8f9fa;
            margin: 0;
            padding: 20px;
          }
          .header {
            background: #000;
            color: #fff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header p {
            margin: 10px 0 0 0;
            opacity: 0.8;
          }
          .stats {
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .stats strong {
            color: #007bff;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          th {
            background: #007bff;
            color: #fff;
            padding: 12px;
            text-align: left;
            font-weight: 600;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #eee;
          }
          tr:hover {
            background: #f8f9fa;
          }
          .url {
            color: #007bff;
            text-decoration: none;
            word-break: break-all;
          }
          .url:hover {
            text-decoration: underline;
          }
          .priority {
            font-weight: 600;
          }
          .priority-high { color: #28a745; }
          .priority-medium { color: #ffc107; }
          .priority-low { color: #6c757d; }
          .changefreq {
            background: #e9ecef;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            text-transform: uppercase;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🗺️ Elanswer XML Sitemap</h1>
          <p>This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs for the Elanswer AI Automation platform.</p>
        </div>
        
        <div class="stats">
          <strong>Total URLs:</strong> <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> |
          <strong>Last Updated:</strong> <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/> |
          <strong>Generated:</strong> <script>document.write(new Date().toLocaleDateString());</script>
        </div>

        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}" class="url" target="_blank">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
                <td>
                  <span class="changefreq">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </span>
                </td>
                <td>
                  <xsl:variable name="priority" select="sitemap:priority"/>
                  <span class="priority">
                    <xsl:attribute name="class">
                      priority
                      <xsl:choose>
                        <xsl:when test="$priority &gt; 0.7">priority-high</xsl:when>
                        <xsl:when test="$priority &gt; 0.4">priority-medium</xsl:when>
                        <xsl:otherwise>priority-low</xsl:otherwise>
                      </xsl:choose>
                    </xsl:attribute>
                    <xsl:value-of select="$priority"/>
                  </span>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>

        <div class="footer">
          <p>Generated by Elanswer AI Automation Platform | <a href="https://elanswer.com" style="color: #007bff;">Visit Website</a></p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
