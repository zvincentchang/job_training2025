#!/bin/bash

echo "==================================="
echo "   Servlet 專案結構檢查工具"
echo "==================================="

PROJECT_ROOT="C:/aicode/servlet-math-calculator"

echo "檢查專案根目錄..."
if [ -d "$PROJECT_ROOT" ]; then
    echo "✅ 專案根目錄存在"
else
    echo "❌ 專案根目錄不存在"
    exit 1
fi

echo ""
echo "檢查必要檔案..."

files=(
    "pom.xml"
    "src/main/java/com/example/servlet/MathOPServlet.java"
    "src/main/java/com/example/servlet/CharacterEncodingFilter.java"
    "src/main/webapp/index.html"
    "src/main/webapp/WEB-INF/web.xml"
    "src/main/webapp/error/404.html"
    "src/main/webapp/error/500.html"
    "README.md"
)

for file in "${files[@]}"; do
    if [ -f "$PROJECT_ROOT/$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file 不存在"
    fi
done

echo ""
echo "==================================="
echo "   檢查完成！"
echo "==================================="
echo ""
echo "建議的後續步驟："
echo "1. 使用 'cd C:/aicode/servlet-math-calculator' 進入專案目錄"
echo "2. 執行 'mvn clean compile' 編譯專案"
echo "3. 執行 'mvn package' 打包專案"
echo "4. 將生成的 WAR 檔案部署到 Tomcat 伺服器"