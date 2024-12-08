FROM python:3.10-slim

# Install required system dependencies (with MariaDB as the MySQL replacement)
RUN apt-get update && apt-get install -y \
    pkg-config \
    libmariadb-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file
COPY requirements.txt /app/

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application
COPY . /app/

# Expose the port your app runs on (optional, depending on your app)
EXPOSE 8000

# Command to run your app (replace with your actual command)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
