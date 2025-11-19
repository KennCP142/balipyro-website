#!/bin/bash

# Script to move images from root img/ folder to public/img/

echo "Moving images to public directory..."

# Create public directory if it doesn't exist
mkdir -p public

# Move img folder to public
if [ -d "img" ]; then
    mv img public/
    echo "✅ Images moved to public/img/"
else
    echo "⚠️  img/ folder not found. Make sure you're in the project root directory."
fi

# Remove old static files that are no longer needed
echo "Cleaning up old files..."

# Remove old HTML files
rm -f index.html about.html services.html inquiry.html our_event.html

# Remove old CSS and JS directories
rm -rf css/ scss/ js/

echo "✅ Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm install' to install dependencies"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
