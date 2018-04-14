FROM nginx:latest
# Ensure that we have the latest verion of everyting
# We tie the commands together with the && sign to avoid adding unecessary layers to the resulting image.
# Same thing is acheived by removing any obsolete or uneeded packages by running apt-get autoclean
RUN apt-get update -q && apt-get dist-upgrade -y && apt-get clean && apt-get autoclean && apt-get install openssl -y
# Define a variable for the web path location
ENV WWW_PATH /usr/share/www/html
# Create the web path directory if it does not already exists
RUN mkdir -p $WWW_PATH && chown nginx:nginx $WWW_PATH
# Create the .htpasswd file for authentication
ARG PASSWORD=pass
RUN printf "user:$(openssl passwd -1 $PASSWORD)\n" >> $WWW_PATH/.htpasswd
# Delete the default Nginx configuration file and replace it with our own
RUN rm /etc/nginx/conf.d/default.conf
# Add our file to the configuration path
COPY etc/nginx/conf.d/main.conf /etc/nginx/conf.d/
# Add our blog files to the web path
COPY usr/share/www/html/ /usr/share/www/html/
